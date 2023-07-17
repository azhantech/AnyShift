import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require('../assets/images/generalImage/board1.png'),
        title: "Work On\n Your Own Time\n",
        redTitle: 'Get Paid Instantly!',
        description: "AnyShift connects reliable worker to local business. Earn more and own your time."
    },
    {
        id: 2,
        backgroundImage: require('../assets/images/generalImage/board2.png'),
        title: "Find The\nPerfect ",
        redTitle: 'Job\n Opportunity!',
        description: "Scope out jobs in different industries with AnyShift, find your favorite gig, & make work feel like play."
    },
    {
        id: 3,
        backgroundImage: require('../assets/images/generalImage/board3.png'),
        title: "Seamless\n Job Application\n",
        redTitle: 'Process!',
        description: "With Anyshift, applying for jobs is a breeze. Simply submit your profile, upload your resume, and start applying to jobs that interest you."
    }
]

 const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};



export default {
    onboarding_screens,
    SIZES,
}