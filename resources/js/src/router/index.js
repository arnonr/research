import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import { canNavigate } from "@/libs/acl/routeProtection";
import {
    isUserLoggedIn,
    getUserData,
    getHomeRouteForLoggedInUser,
} from "@/auth/utils";
import apps from "./routes/apps";
import dashboard from "./routes/dashboard";
import uiElements from "./routes/ui-elements/index";
import pages from "./routes/pages";
import chartsMaps from "./routes/charts-maps";
import formsTable from "./routes/forms-tables";
import others from "./routes/others";
import useJwt from "@/auth/jwt/useJwt";
import project from "./routes/project";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        { path: "/", redirect: { name: "projects" } },
        ...apps,
        ...dashboard,
        ...project,
        ...pages,
        ...chartsMaps,
        ...formsTable,
        ...uiElements,
        ...others,
        {
            path: "*",
            redirect: "error-404",
        },
    ],
});

router.beforeEach(async (to, _, next) => {
    const isLoggedIn = isUserLoggedIn();

    if (!canNavigate(to)) {
        // Redirect to login if not logged in
        // if (!isLoggedIn) return next({ name: 'auth-login' })

        if (!isLoggedIn) {
            await useJwt
                .login({
                    email: "admin@demo.com",
                    password: "admin",
                })
                .then((response) => {
                    const { userData } = response.data;
                    useJwt.setToken(response.data.accessToken);
                    useJwt.setRefreshToken(response.data.refreshToken);
                    localStorage.setItem("userData", JSON.stringify(userData));
                    this.$ability.update(userData.ability);

                })
                .catch((error) => {
                    console.log(error.response);
                });

            setTimeout(() => {
                console.log("FREEDOM1");
                return next();
            }, 5000);
        }
        // If logged in => not authorized
        // return next({ name: "misc-not-authorized" });
    }

    // Redirect if logged in
    if (to.meta.redirectIfLoggedIn && isLoggedIn) {
        const userData = getUserData();
        next(getHomeRouteForLoggedInUser(userData ? userData.role : null));
    }
    return next();
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById("loading-bg");
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

export default router;
