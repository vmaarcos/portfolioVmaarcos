import React, {useState, useEffect} from 'react'

const scrollEmProgressao = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [completion, setCompletion] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect (() => {
        const updateScrollCompletion = ()=> {
            const currentProgress = window.scrollY;
            const scrollHeight  = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
            }
        };

        //evento 
     window.addEventListener('scroll', updateScrollCompletion);
        //parar o evento
        return ()=> window.removeEventListener('scroll', updateScrollCompletion);
    }, []);


  return completion;
};

export default scrollEmProgressao