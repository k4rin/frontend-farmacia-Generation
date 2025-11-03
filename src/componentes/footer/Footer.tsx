import {  GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";


function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
        <div className="flex justify-center bg-[#555555] text-white">
            <div className="container flex  flex-col items-center py-4">
                <p className="text-xl font-bold">
                    FarmaZen | Copyright: {data}
                </p>
                <p className="text-lg">Acesse nossas reder sociais</p>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/karine-cristine-lopes-dos-santos/" target="_blank">
                    <LinkedinLogoIcon size={40} weight="bold" />
                    </a>
                    <a href="https://github.com/k4rin" target="_blank">
                    <GithubLogoIcon size={40} weight="bold" />
                    </a>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;