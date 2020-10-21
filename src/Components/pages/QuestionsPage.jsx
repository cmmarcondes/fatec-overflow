import React, {useState, useCallback, useEffect} from 'react';
import QuestionsService from '../../Services/service';
import { StyledCard, PostTitle } from '../../Styles/styles';

const QuestionsPage = () => {
    const [questions, setQuestions] = useState([]);

    const get_questions = useCallback(async() => {
        const questions_data = await QuestionsService.getPerguntas(null, 1);
        setQuestions(questions_data.data)
    }, [])

    useEffect(()=>{
        get_questions();
    }, [get_questions]);

    const questions_control = questions.map((element)=>{
        return <>
        <StyledCard key={element.id} to={{pathname: `/posts/${element.id}`}}>
        <PostTitle homepage>{element.title}</PostTitle>
        </StyledCard>
        </>
    })
    return(
        <>
{questions_control}
        </>
    );
}

export default QuestionsPage;