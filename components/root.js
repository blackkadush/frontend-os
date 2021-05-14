import aboutUs from './pages/aboutUs'
import projects from './pages/projects'
import donate from './pages/donate'
import contactUs from './pages/contactUs'
import header from './header'
import footer from './footer'

const root = document.getElementById('root')
const App = document.createElement('div')
App.setAttribute('id', 'app')
root.append(App)

export default function router(route) {
    switch (route) {
        case '/projects':
            replaceRoute(projects)
            break;
        case '/aboutUs':
            replaceRoute(aboutUs)
            break;
    
        case '/donate':
            replaceRoute(donate)
            break;
        
        case '/contactUs':
            replaceRoute(contactUs)
            break;

        default:
            replaceRoute(aboutUs)
            break;
    }
}

const replaceRoute =  (component) => {
    const appID = document.getElementById('app')
    root.removeChild(appID)
    const app = document.createElement('div')
    app.setAttribute('id', 'app')
    app.append(header())
    app.append(component())
    app.append(footer())
    root.append(app)
}

router()
