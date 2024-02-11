const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
const sc = new mongoose.Schema({
    teachername: {
        type: String,

        default: ""
    },
    attendence:
        new mongoose.Schema({
            year: {
                type: Number,
                enum: [2021, 2022, 2023, 2024, 2025]
            },
            month: [
                new mongoose.Schema({
                    m: {
                        type: String,
                        enum: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    dateoftakingclass: [Number],
                    dateofpresent: [Number],
                    totalclasses: {
                        type: Number,
                        default: 0
                    },
                    present: {
                        type: Number,
                        default: 0
                    }
                })
            ]
        })

});
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rollno: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8

    },

    branch: new mongoose.Schema({
        CE52: new mongoose.Schema({
            subjects: new mongoose.Schema({
                DBMS: sc,
                TOC: sc,
                SS: sc,
                ML: sc,
                OOPS: sc,
                UHV: sc,
                COI: sc,
                BIO: sc,
                OOPSLAB: sc,
                DBMSLAB: sc

            })
        })
        ,
        CE51: new mongoose.Schema({
            subjects: new mongoose.Schema({
                DBMS: sc,
                TOC: sc,
                SS: sc,
                ML: sc,
                OOPS: sc,
                UHV: sc,
                COI: sc,
                BIO: sc,
                OOPSLAB: sc,
                DBMSLAB: sc
            })
        })

    }),



    universityname: {
        type: String,
        enum: ["jcboseust", "jc bose ust"],

    },
    course: {
        type: String
    },
    skills: {
        type: String
    }
});
schema.pre("save", async function (next) {
    var salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
const model = mongoose.model("universitystudent", schema);
module.exports = model