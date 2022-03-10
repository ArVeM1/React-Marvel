import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			<ErrorMessage/>
			<p style={{'textAlign': 'center', 'fontSize': '24px', 'fontWeight': 'bold', 'marginBottom': '10px'}}>Страницы не существует!</p>
			<Link style={{'display': 'block','textAlign': 'center', 'fontSize': '24px', 'fontWeight': 'bold', 'border': '6px solid #7922CC' , 'borderRadius': '100%', 'width': '300px', 'margin': '0 auto'}} to="/">Back to main page</Link>
		</div>
	);
};

export default Page404;