export default [
    {
      path: '/project',
      name: 'projects',
      component: () => import('@/views/project/Project.vue'),
    },
    {
      path: '/report-pi',
      name: 'report-pi',
      component: () => import('@/views/project/report/ReportPi.vue'),
    },
  ]
  