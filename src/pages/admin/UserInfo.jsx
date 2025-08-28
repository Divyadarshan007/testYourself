import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../../features/exam/examSlice"
import { useState } from "react"


const UserInfo = () => {
    const users = useSelector((store) => store.exam.exams)
    const allExams = useSelector((store) => store.exam.allQuestions)
    const dispatch = useDispatch()
    const [submittedExam, setSubmittedExam] = useState(true)
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    const handleAssignExam = () => {

    }
    return (
        <div className="container mx-auto my-10">
            <div className="flex gap-4 justify-end">
                <button className="border px-7 py-2 mb-5" onClick={() => setSubmittedExam(true)}>Submitted Exam</button>
                <button className="border px-7 py-2 mb-5" onClick={() => setSubmittedExam(false)}>Assigned Exam</button>
            </div>
            {
                submittedExam ?
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Marks
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, idx) => {
                                        return <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {user.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.examName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.marks}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-4">
                                                    <button className="border px-5 py-2" onClick={() => handleDelete(user.id)}>Delete</button>
                                                    <button className="border px-5 py-2" onClick={handleAssignExam}>kuch or</button>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div> :
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" className="px-6 py-3">

                                        Exam Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Exam Catagory
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total Questions
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allExams.map((exam, idx) => {
                                        return <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {idx + 1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {exam.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                {exam.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                {exam.questions.length}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-4">
                                                    <button className="border px-5 py-2" onClick={() => handleDelete(user.id)}>Delete</button>
                                                    <button className="border px-5 py-2" onClick={handleAssignExam}>kuch or</button>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            }


        </div>
    )
}

export default UserInfo