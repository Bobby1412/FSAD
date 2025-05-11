function Post(){
    return(
        <><h1>Post a job</h1>
        <form>
            <div class="post-cont">
            <div>
            <label>Job Title:</label>
            <input type="text" id="job-title" name="job-title" />
            </div>
            <div>
            <label>Description:</label>
            <textarea id="description" name="description"></textarea>
            </div>
            <div>
            <label>Budget:</label>
            <input type="number" id="budget" name="budget" />
            </div>
            <div>
            <label>Deadline:</label>
            <input type="date" id="deadline" name="deadline" />
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
            </div>
        </form></>
    )
}
export default Post