import React, { useEffect, useCallback, useState } from 'react';
import AnswerService from '../../Services/service'
import { PostTitle, StyledBar } from '../../Styles/styles';

const AnswersPage = () => {
    const [answer, setAnswer] = useState([]);

    const get_answers = useCallback(async() => {
        const answers_data = await AnswerService.getRespostas(null, 1);
        setAnswer(answers_data.data)
    }, [])

    useEffect(()=>{
        get_answers();
    }, [get_answers]);

    const answer_control = answer.map((element)=>{
        return <>
        <StyledBar key={element.id} to={{pathname: `/posts/${element.fk_answers_asks}`}}>
        <PostTitle homepage ><i>"{element.body}"</i></PostTitle>
        </StyledBar>
        </>
    })
    return(
        <> 
        {answer_control}    
        </>
    );
}

export default AnswersPage;