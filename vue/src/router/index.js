import Vue from 'vue'
import Router from 'vue-router'
import UserCreateComponent from '@/components/UserCreateComponent'
import UsersComponent from '@/components/UsersComponent'
import UserComponent from '@/components/UserComponent'
import HomeComponent from '@/components/HomeComponent'
import WorkoutCreateComponent from '@/components/WorkoutCreateComponent'
import WorkoutsComponent from '@/components/WorkoutsComponent'
import WorkoutComponent from '@/components/WorkoutComponent'
import SessionComponent from '@/components/SessionComponent'
import ExerciseCreateComponent from '@/components/ExerciseCreateComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/user/create',
      name: 'Register',
      component: UserCreateComponent
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersComponent
    },
    {
      path: '/user/:id',
      name: 'User',
      component: UserComponent,
      props: true // When props is set to true, the route.params will be set as the component props.
    },
    {
      path: '/user/update/:id',
      name: 'UpdateUser',
      component: UserCreateComponent,
      props: true // When props is set to true, the route.params will be set as the component props.
    },
    {
      path: '/workouts',
      name: 'Workouts',
      component: WorkoutsComponent
    },
    {
      path: '/workout/create',
      name: 'WorkoutCreate',
      component: WorkoutCreateComponent
    },
    {
      path: '/workout/:workoutId',
      name: 'Workout',
      component: WorkoutComponent
    },
    {
      path: '/workout/:workoutId/session/',
      name: 'Session',
      component: SessionComponent
    },
    {
      path: '/workout/:workoutId/exercises/create',
      name: 'ExercisesCreate',
      component: ExerciseCreateComponent
    },
  ]
})
