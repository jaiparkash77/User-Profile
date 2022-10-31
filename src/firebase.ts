import { getApp, initializeApp,  } from 'firebase/app';
import { getAuth,connectAuthEmulator } from 'firebase/auth';

const config = {

};

export  async function getFirebaseApp() {
    try {
        return await getApp()
    } catch (error) {
        return await initializeApp(config);
    }
}

export async function getFirebaseAuth(environment = 'production') {
    const app = await getFirebaseApp();
    const auth = await getAuth(app)
    if(environment === 'development' && !auth.emulatorConfig) { 
        // TODO: Install emulator suite
        // await connectAuthEmulator(auth, 'http://localhost:5010')
    }
    return auth;
}
