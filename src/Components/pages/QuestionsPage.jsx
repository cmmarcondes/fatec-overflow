import React, {useState, useCallback, useEffect} from 'react';
import QuestionsService from '../../Services/service';
import { StyledBar, PostTitle, PostUser } from '../../Styles/styles';

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
        <StyledBar key={element.id} to={{pathname: `/posts/${element.id}`}}>
        <PostTitle homepage>{element.title}</PostTitle>
        <PostUser>Criado em {element.createdAt.slice(8, 10)}/{element.createdAt.slice(5, 7)}/
              {element.createdAt.slice(0, 4)}</PostUser>
        </StyledBar>
        </>
    })
    return(
        <>
{questions_control}
        </>
    );
}

export default QuestionsPage;