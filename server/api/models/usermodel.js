import mongoose from "mongoose";
 const  userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true, 
    
    },
    password:{
        type:String,
        required:true,
       
    },
    profilePicture:{
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAACUCAMAAADRRocBAAAAMFBMVEXk5ueutLfn6eqrsbSnrrHh4+Tq7O3R1Naxt7rJzc+0ur3GyszY29zO0dPd4OG+w8V7OKPAAAAE8UlEQVR4nN2c2dbrIAiFI8YhxuH93/ZoOp82f6OSQrLv2iu/BSISYRj2FgAM0ZuQZbwqvw4tAGVmOz7LJqOOi6VicOMoxavkOLoQqdfWIBiUSXIUHyVHmUwcjmUriMa92eeVyoYjQX0FukC5oA7CBJBd7hvQBSqZQxgK1CS2AC1QYor8mcCnrUALVPLcmcC4GqLM5AxvJgi2jigz2Yn1hpoqeS6aGKcTbURCsmWCUOt0DybqtX8WmFYiIUaWMQJ8O1FmYhjLIVZG71dJq6gJ3jWvpN1bzZSoAd5k+ogy08TL9SD2eN2ViVdeDlWJ3WdJp6kxngS+1+0WM3GK5HrzdeJvUXM8BN2x4SI5sXE9QAHKstQkN2EZKWtmYibtsIiE5REgwKMRCcEj6OmEiJR4eJ7FI5KOQ2lZGzyivJkCAzOh+p2QLDyv6570hsTA88DjhfAiSx/zdECMDkX0SZFGuFY8SyZyK2HclF6RyIsQCjU6LPGB2kzI0UEIR13+AoONRB7ywCAHPCECNVJjZf8PURe/9IxNJE+INFM73owbwwsSLdEZkU7oeBo94pGHBwjnQzrhUYuORJ4QnTBtPePl4oRXQPSLOvWxVA6m05VTsOMDi7dspytNnrGADMhlfgZ+lz0Pj4iF3+F6Hgu/O+WHTczPz44HUddzyf9EfVe6C7ASCDZPORAf3HAxUt5N1Q/eP4sP0Rkfr53wieEACsFIvB6CYjzX5ZHdPSv1MTH47Py/IHZGPfKSw7t6GxSo1/9JPRcnaahXv6Lm+rgM1EtfVetnDL6tc9DaOMeWqKi+vVEwb29sakKlXvM3na9VuKR7YXtDtzxG5z1kQ32dI7BoTJ73NnoI1IbhCGJ05hAmuqjMTLFfRli4oI5iopuUSeNacj4WC1EvsEHZVCvjYOwUuXZwfxXowadlaI8sug7tGfRRea7SOnP5EKZgfFx+nUJwE/VCOrWsPwcB9aLLf8PB6Io1lIrRezPNKTlnS56wDL2xLqU0T9kFY8E7BFiZSZZZwpysuISFtxNpCRNSuJTJfOTNlaN2zIZJTr6H7g+HbUGzaQ4ZiydV5vFmLjiVl4tsr4LFLZMAiIt1Ng2J+mSvxVp8qECrxTxdZbxirBQ8Cw/MV4lunicqo4hTi5zwmOSQeu4XKutm0vxPqymfOcgvvYRNZP6nFepTm2c5T5EJapgxNtCK5O+htJ4rz59ajSL+FArM6oUVESr9sDTh3f5Aotx/fzS+DNSem+hVo/vBZycYaivEXZJy3vs1G8Rtwz4Rofaumf/URFcmMe/3GB6GCelhTSXUbp8CQP3a6e5Mbp/BFtr/3unuTGKPN/7akDjdHSqhH1F6+0ejvZiQL73kROhM+E2MDZIOkUlP1CZahMik0bsyG4Xme2DI99FNEmdsKBCeR29C6fbuHDGLLYnwtlKh99V3Sdr+fK95+vRO6m4HAs8mNNw09m4nVhvpItn1Qh54nLGv6htqjTDZeAf1vL8Ghm5XNDZHCI03jxVX0rZecjVPG4nyqryNia2RihqR2BqpBPIWJo3XtLiDmnaTRp/zginZUizHbADeQQ1t0vhjoHDVkkKw9rus6gIseO5I1VkRd79ruDdxTe8eqp4qFbGHQOGrco7/DtPHsFV7xWC/leo3E/YMqD1U+7X9AEiV8YFXPXJFddMhOBWN17Q20Owfd9dMp0CXnI4AAAAASUVORK5CYII=",
    }
 },{timestamps: true, versionKey: false});

 const User = mongoose.model('User', userSchema);

 export default User;