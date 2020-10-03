import React from 'react'

const Footer = () => {
    return (
        <footer id="down" class="text-center text-white text-muted">
            <div>
                <a className="top" href="#top"><i class="fas fa-arrow-up"></i></a>
                <a className="down" href="#down"><i class="fas fa-arrow-down"></i></a>
                <a className="mx-3 "  href="https://twitter.com/AkinJokotoye" target="_blank"><i class="fab fa-twitter mr-1" aria-hidden="true"></i></a>
                <a className="mx-3 "  href="https://www.linkedin.com/in/jokotoye-ademola-akin-12b539175/" target="_blank"><i class="fab fa-linkedin mr-1" aria-hidden="true"></i></a>
                <a className="mx-3"  href="https://github.com/Jokotoye18?tab=repositories" target="_blank"><i class="fab fa-github mr-1" aria-hidden="true"></i></a>
                <p>© 2020 | Developed By Jokotoye Ademola</p>
            </div>
        </footer>
    )
}

export default Footer
