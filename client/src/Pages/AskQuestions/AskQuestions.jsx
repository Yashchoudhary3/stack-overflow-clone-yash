import React , { useState }from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestions.css'
import  { askQuestion} from '../../actions/questions.js'

  
const AskQuestions = () => {
  const [ questionTitle, setQuestionTitle ] = useState('')
const [ questionBody, setQuestionBody ] = useState('')
const [ questionTags, setQuestionTags ] = useState('')

const dispatch = useDispatch()
const User = useSelector((state) => (state.currentUserReducer))
const navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault()
  // console.log({questionTitle,questionBody,questionTags})
  dispatch(askQuestion({ questionTitle,questionBody,questionTags ,userPosted: User.result.name , userId: User?.result?._id} , navigate))
}
const handleEnter = (e) => {
 if(e.key === 'Enter'){
  setQuestionBody(questionBody + "\n")
 }
}

  return (


    <div className='ask-questions'>
      <div className='ask-ques-container'>
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and imagine youre asking a question to another person</p>
              <input type="text" id='ask-question-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?' />

            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea name="" id="ask-question-body" onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
            </label>
            <label htmlFor="ask-ques-title">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input type="text" id='ask-question-tags' onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} placeholder='
e.g. (xml typescript wordpress)' />
            </label>

          </div>
          <input type="submit" value='Review your Question'  className='review-btn'/>
        </form>

      </div>

    </div>


  )
}

export default AskQuestions
