import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <PostsList />
                },
                {
                    path: 'post',
                    children: [
                        {
                            index: true,
                            element: <AddPostForm />
                        },
                        {
                            path: ':postId',
                            element: <SinglePostPage />
                        },
                        {
                            path: "edit/:postId",
                            element: <EditPostForm />
                        }
                        // If you want to add EditPostForm, you can add it similarly
                    ]
                },
                {
                    path: "user",
                    children: [
                        { index: true, element: <UsersList /> },
                        { path: ":userId", element: <UserPage /> }
                    ]
                },
                {
                    path: "*", element: <Navigate to="/" replace />
                }
            ]
        }
    ]
);

function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
