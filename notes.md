Book your Occupational Therapist
Acunpuncturist

session now,
no issurance hassle.

Health shouldn't be puzzle, we are cuttin through the B.S to bring you simple, affordable and transparent healthcare.

const TEXTS =['Acupunture','Massage','chiropractor','Dental','Cosmetic','Speech Therapist','Occupational Therapist','Acunpuncturist','Dietitian']

https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth

//creating prisma
npm install prisma @prisma/client
npx prisma init --datasource-provider mongodb //using prisma with mongodb
npx prisma db push // pushing to prisma db

//Send an Email with the Token on the link as a search param
// const token = newUser.token;
// const userId = newUser.id;
// const name = newUser.name.split(" ")[0];
// const linkText = "Verify your Account ";
// const message =
// "Thank you for registering with UCH. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
// const sendMail = await resend.emails.send({
// from: "Medical App <info@jazzafricaadventures.com>",
// to: email,
// subject: "Verify Your Email Address",
// react: EmailTemplate({ name, token, linkText, message }),
// });
// console.log(token);
// console.log(sendMail);
// console.log(newUser);


interface ButtonProps extends React.ComponentProps<"button"> {
    variant: "outlined" | "contained";
    color?: "primary" | "secondary";
    className?: string;
    loading?: boolean;
}
const Button = ({ variant, loading, disabled, children, color, className, ...rest }: ButtonProps) => {
    const baseClasses = 'p-[10px] rounded-[10px] h-[62px] text-white w-[230px] font-semibold text-xl';
    let variantClasses = '';

    if (variant === 'outlined') {
        variantClasses = 'border-[#FFFDD0] border-[1px]';
    } else {
        variantClasses = color === 'primary' ? 'bg-[#4B5320] text-white hover:bg-[#90AB00]' : 'bg-[#90AB00] text-white';
    }
    const buttonClasses = `${baseClasses} ${variantClasses} ${className}`;

    return (
        <button className={buttonClasses} {...rest} disabled={disabled || loading}>
            {loading ? 'Loading...' : children}
        </button>
    )
}

export default Button;



import Button from 'src/components/Button';
import Navitems from './Navitems'
import { Link, useNavigate } from 'react-router-dom'
const logo: string = require("../../../assets/logo.svg").default;
const Header = () => {
    const navigate = useNavigate()
    return (
        <header className='header-bg h-[640px]'>
            <div className='py-6 px-20 flex justify-between items-center'>
                <div className=" w-[100px] h-[100px]">
                    <Link to={"/"}>
                        <img
                            src={logo}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </Link>
                </div>
                <nav>
                    <Navitems />
                </nav>
            </div>
            <div>
                <div className="text-center flex justify-center items-center mt-20">
                    <div className="">
                        <h3 className='text-4xl font-[400] text-white pb-5 font-Acme'>C.A.C ALUMNI</h3>
                        <h1 className='text-6xl font-[400] text-[#FEFECC] tracking-wider font-Acme'>
                            WELCOME HOME
                        </h1>
                        <p className="text-white pt-5 text-xl font-medium leading-8 max-w-[46%] mx-auto font-urbanist pb-3">We're thrilled to have you here. Reconnect with peers, forge new connections, explore opportunities, and stay informed about events of C.A.C Commercial High School Old Students Association.</p>

                        <div className="pt-10 space-x-20 font-urbanist">
                            <Button onClick={() => navigate('/how-it-started')} color="primary" variant='contained' className='hover:bg-[#839521] !text-lg !uppercase'>
                                How it started
                            </Button>
                            <Button onClick={() => navigate('/gallery')} color="secondary" variant='outlined' className='!uppercase hover:bg-white hover:text-black'>
                                gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header


import { Link, useLocation } from 'react-router-dom'
import { navItems } from 'src/configs/constants';


const Navitems = () => {
    const { pathname } = useLocation();
    return (
        <div className="w-full hidden md:flex items-center">
            {navItems.map((i: NavItems, index: number) => (
                <Link to={`/${i.link}`} key={index}
                    className={`px-5 text-lg font-semibold uppercase font-urbanist ${pathname.includes(i.link) ? 'text-[#222222]' : 'text-[#222222] '}`}>
                    {i.title}
                </Link>
            ))}
        </div>
    )
}

export default Navitems

import { Link } from 'react-router-dom'
import Navitems from './Navitems'
const logo: string = require("../../../assets/logo.svg").default;

const Navbar = () => {
    return (
        <div className='bg-[#FFFDD0] h-[138px]'>
            <div className='py-4 px-20 flex justify-between items-center'>
                <div className="w-[100px] h-[98.5px]">
                    <Link to={"/"}>
                        <img
                            src={logo}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </Link>
                </div>
                <nav>
                    <Navitems />
                </nav>
            </div>
        </div>
    )
}

export default Navbar


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Urbanist: ["Urbanist", "sans-serif"],
      EBGaramond: ["EB Garamond", "serif"],
      Acme: ["Acme", "sans-serif"], 
    },
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        ebgaramond: ["EB Garamond", "serif"],
        acme: ["Acme", "sans-serif"],
      },
      textStyles: {
        "eb-garamond-<uniquifier>": {
          fontFamily: "EB Garamond, serif",
          fontOpticalSizing: "auto",
          fontStyle: "normal",
          fontWeight: "<weight>",
        },
        "acme-regular": { 
          fontFamily: "Acme, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
        },
      },
    },
  },
  plugins: [],
};


@import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Acme&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');