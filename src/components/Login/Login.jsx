
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.int";
import { useState } from "react";
const Login = () => {

    const[user, setUser] = useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handelGoogleSignIn = ()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const logedInUser = result.user;
            console.log( logedInUser);
            setUser(logedInUser);
        })
        .catch(error => {
            console.log('error', error.message)

        })
       
            
        
    }

    const handelSignOut = ()=>{
        signOut(auth)
        .then(result=>{

            console.log(result)
            setUser(null);

        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handelGithubSignIn=()=>{
        signInWithPopup(auth, githubProvider)

        .then(result =>{
            const logedInUser = result.user;
            console.log(logedInUser);
            setUser(logedInUser);
        })

        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            { user ?
              <button onClick={handelSignOut}>Sign Out</button>:

            <>
                <button onClick={handelGoogleSignIn}>Google Login</button>
            <button onClick={handelGithubSignIn}>Github Login</button>
            </>
            
        }
            { user && <div>
                   
                    <h1>User: {user.displayName}</h1>
                    <p>email: {user.email}</p>

                    <img src={user.photoURL} alt="" />


                </div>

            }
        </div>
    );
};

export default Login;