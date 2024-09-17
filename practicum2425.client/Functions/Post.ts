export const Post = async (urlString, upload) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("content-type", "application/json");

        await fetch(urlString, {
            method: "POST",
            body: JSON.stringify(upload),
            headers: myHeaders,
        })
    }
    catch (e) {
        console.log(e)

    }
}