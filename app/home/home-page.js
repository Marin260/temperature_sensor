import { HomeViewModel } from './home-view-model'

export function onNavigatingTo(args) {
  const page = args.object
  page.bindingContext = new HomeViewModel()
}

export function buttonPressed() {
  alert('button pressed')
}

// buttonPressed = () => {
//   alert('button pressed')
// }
