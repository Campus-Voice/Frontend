import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import CYSS from "../../../public/Assets/Images/CYSS.jpg"
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
                                        <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Follow</a>
                                        <a href="#" class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-around gap-4 flex-wrap">
                            <Card className="mt-6 w-96">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        UI/UX Review Check
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach and bus stop just 2 min by
                                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                        night life in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button>Read More</Button>
                                </CardFooter>
                            </Card>
                            <Card className="mt-6 w-96">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        UI/UX Review Check
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach and bus stop just 2 min by
                                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                        night life in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button>Read More</Button>
                                </CardFooter>
                            </Card>
                            <Card className="mt-6 w-96">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        UI/UX Review Check
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach and bus stop just 2 min by
                                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                        night life in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button>Read More</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}