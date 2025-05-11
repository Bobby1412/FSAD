function index(){
    return(
        <>
        <h1>Contact</h1>
        <form>
            <label>Your Name:</label>
            <input type="text" id="name" name="name" />

            <label>Your Email:</label>
            <input type="email" id="email" name="email" />

            <label>Message:</label>
            <textarea id="message" name="message" />
            <textarea><button type="submit">Send</button></textarea>
        </form>
    </>
    )
}
export default index