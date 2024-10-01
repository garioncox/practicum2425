//upload can be any, disabling because it is intended behavior
/* eslint-disable @typescript-eslint/no-explicit-any */

//type can be POST or PUT
export const httpRequest = async (urlString: string, upload:any, type: string) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("content-type", "application/json");

        await fetch(urlString, {
            method: type,
            body: JSON.stringify(upload),
            headers: myHeaders,
        })
    }
    catch (e) {
        console.log(e)
    }
}

export const httpDelete = async (urlString) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("content-type", "application/json");

        await fetch(urlString, {
            method: "DELETE",
            headers: myHeaders,
        })
    }
    catch (e) {
        console.log(e)
    }
}
