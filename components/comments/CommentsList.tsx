import { Comment } from "@/lib/types";
import { formattedDate } from "@/utils/server";

type Props = {
    comments: Comment[];
};

const CommentsList = ({ comments }: Props) => {
    return (
        <div className="mt-12">
            <h2 className="font-Outfit text-2xl font-semibold dark:text-black">
                Comments ({comments.length})
            </h2>

            {comments.length === 0 ? (
                <p className="mt-4 text-gray-500">
                    No comments yet. Be the first to join the conversation.
                </p>
            ) : (
                <div className="mt-6 flex flex-col gap-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="rounded-2xl border border-gray-200 p-5"
                        >
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="font-medium text-gray-900">
                                    {comment.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {formattedDate(comment.createdAt)}
                                </p>
                            </div>

                            <p className="mt-3 whitespace-pre-line leading-7 text-gray-700">
                                {comment.message}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentsList;
