import axios from 'axios';
export const sendTracyOTP = async (mob) => {
    let parameters = {
        country_code: '91',
        targetNumber: mob
    }
    try {
        await axios({
            url: 'http://api.msg91.com/api/v5/otp?authkey=300655AwBn6Fz74Ie5db184a4&template_id=5db2c7a4d6fc0547e27a4f23&mobile=' + parameters.country_code + '' + parameters.targetNumber + '&invisible=1',
            method: 'POST',
        })
    } catch (e) {
        // console.log(e);
    }
}

export const verifyTheOTP = async (mob, otp) => {
    let parameters = {
        country_code: '91',
        targetNumber: mob,
        oTp: otp
    }
    try {
        let res = await axios({
            url: 'https://api.msg91.com/api/v5/otp/verify?mobile=' + parameters.country_code + '' + parameters.targetNumber + '&otp=' + parameters.oTp + '&authkey=300655AwBn6Fz74Ie5db184a4',
            method: 'POST',
        });
      
        return res;
        //  return res.data.message !== 'OTP not match';
        // return res.data.message == "OTP verified success" ? "success" : "already";
    } catch (e) {
        // console.log(e);
    }
}