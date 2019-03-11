import React from 'react'

const footerStyle = {
    backgroundColor: "dodgerblue",
    height: 50,
    color: "white",

}
function Footer() {
	return (
            <div className="col-lg-12" style={footerStyle}>
                <div className="container">
                    <p>Shuler.dev</p>
                </div>
            </div>
	)
}

export default Footer;