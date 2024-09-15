import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

export function CollegeProfile() {
    return (
        <div className="col-span-3 bg-black flex flex-wrap gap-5 px-5 py-5">
            <Card
                shadow={false}
                className="relative grid items-end justify-center overflow-hidden text-center size-96"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('Assets/Images/DUBg.jpg')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                    >
                        DU - Innovating Minds, Innovating Careers
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                        Delhi University
                    </Typography>
                    <Avatar
                        size="xl"
                        variant="circular"
                        alt="tania andrew"
                        className="border-2 border-white"
                        src="Assets/Images/DU.jpeg"
                    />
                </CardBody>
            </Card>
        </div>
    );
}