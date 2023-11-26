const mongoose = require('mongoose')

const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas'],
        unique: true
    },
    jurusan: {
        type: String,
        required: [true, 'Silahkan isikan jurusan'],
        unique: true
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isikan alamat'],
        unique: true
    }
    // alamat: {
    //     type: String,
    //     required: [true, 'Silahkan isikan alamat'],
    //     unique: true
    // },
    // gender: {
    //     type: String,
    //     required: [true, 'Silahkan isikan gender'],
    //     unique: true
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     match: [/^\w+\-]?\w+@\w+(\-]?\w+)*(\ \w{2,3})+$/, 'Silahkan isikan email valid!']
    // }
})


module.exports = mongoose.model('Siswa', SiswaSchema)