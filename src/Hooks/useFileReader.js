
export default function useFileReader() {


    const reader = new FileReader();
    
    const getThumbnail = async (file) => {
        try {
            reader.readAsDataURL(file);
            return new Promise((resolve, reject) => {
    
                reader.onload = (event)=> {
                    resolve(event.target.result);
                }
    
                reader.onerror = (error)=> {
                    reject("An error ocurred reading the file")
                    // throw new Error('invalid OR corrupt file error occured while processing file');
                }
            });
            
        } catch (error) {
            throw new Error(error)
        }
    };
    return {
        getThumbnail
    }
}