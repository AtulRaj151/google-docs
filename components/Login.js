import Button from '@material-tailwind/react/Button';
import Image from 'next/image';
import { signIn } from 'next-auth/client';

function Login(props) {
    return (
        <div className="flex flex-col items-center justify-center">
           <Image
             src="https://github.com/AtulRaj151/assetServer/blob/main/google-docs/images/google-docs.png?raw=true"
             height="300"
             width="550"
             objectFit="contain"
           /> 
           <Button
             className="w-44 mt-10"
             color="blue"
             buttonType="light"
             onClick={signIn}
           >
               Login
           </Button>
        </div>
    );
}

export default Login;