import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from "@material-tailwind/react";
import CYSS from "/Assets/Images/CYSS.jpg"
import Event from "/Assets/Images/Event.jpeg"
import {Link} from "react-router-dom"
export function CommunityProfile() {
    return (
        <section className="col-span-3 bg-black">
            <div >
                <div class="py-8">
                    <div class="flex flex-col gap-6 px-4">
                        <div>
                            <div class="bg-white shadow rounded-lg p-6">
                                <div class="flex flex-col items-center">
                                    <img src={CYSS} class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                    </img>
                                    <h1 class="text-xl font-bold">CYSS</h1>
                                    <p class="text-gray-700">890 Members</p>
                                    <div class="mt-6 flex flex-wrap gap-4 justify-center">
                                        {/* <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Follow</a> */}
                                        <a href="#" class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Unfollow</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-around gap-4 flex-wrap">
                            <Card className="mt-6 w-96">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src={Event}
                                        alt="card-image"
                                        className="w-full h-full bg-cover bg-center"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <p className="line-clamp-4">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi architecto et autem unde, necessitatibus id magnam enim neque aut a error facere ad accusantium ea? Possimus quos dicta minima, alias eligendi ipsum nisi architecto non necessitatibus, enim repellendus distinctio. Officiis id ea nesciunt consequuntur magnam ratione harum nostrum aspernatur numquam eum, tempora natus maiores, atque, repellendus accusantium? Dolores, corrupti! Nesciunt quam recusandae distinctio sequi. Dignissimos quis illum debitis fugit deserunt, odit aut deleniti blanditiis quasi neque. Maiores molestias atque quibusdam animi facere nemo et omnis asperiores illo quos quod modi quasi ab voluptas quidem, culpa magni illum pariatur. Molestias, facere.
                                    </p>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Link to="/post/cyss/lorem"><Button>Read More</Button></Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}