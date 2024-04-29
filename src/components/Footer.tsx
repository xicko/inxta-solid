export default function Footer() {
    function getCurrentYear() {
        return new Date().getFullYear()
    }

    return(
        <footer class='pb-16 pt-2 text-xl space-y-1 customfont-base'>
            <p>© {getCurrentYear()} All rights reserved.</p>
            <p>Made with ❤️ by <a href='https://www.dashnyam.com' target='_blank'>Dashnyam</a></p>
            <p>Built with <a href='https://solidjs.com' target='_blank'>SolidJS</a></p>
        </footer>
    )
}