const sg = require('@sendgrid/mail')
sg.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = () => {
    sg.send({
        to: 'recruitmenttest458@gmail.com',
        from:'rithikavijaykumar@gmail.com',
        subject:'GCC Task 5',
        text:'Image is succefully Uploaded! '
    }).then(() => {
        console.log('mail sent')
    }).catch(() => {
        console.log('mail not sent')
    })
}
module.exports = sendEmail