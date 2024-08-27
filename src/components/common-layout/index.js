
import * as React from "react";
import Header from "../header";
import Footer from "../footer";


async function CommonLayout({ children, ...props }) {

    return (

        <div >
            {/* Header Component */}
            <Header></Header>
            {/* Header Component */}
            {/* Main Content */}
            {/* <body className={inter.className}>{children}</body> */}
            <main>{children}</main>
            <Footer></Footer>
            {/* Main Content */}

        </div>

    );
}

export default CommonLayout;

