const Word = require("./../models/word");
const mongoose = require("mongoose");

function getAll(req, res) {
    Word.find({}, (err, wordList) => {
        if (err) {
            res.status(404).json({
                msg: err.message,
            });
            return;
        }

        const words = wordList.map(item => ({
            id: item._id,
            name: item.name,
        }));

        res.status(200).json({
            words,
        });
    });
};

function addWord(req, res) {
    const { word } = req.body;

    Word.find({}, (err, wordsList) => {
        if (err) {
            res.status(404).json({
                msg: err.message,
            });
            return;
        }
        if (wordsList.some(item => item.name === word)) {
            res.status(404).json({
                msg: `You already has ${word} added to your word list!`,
            });
            return;
        }

        const wordToStore = new Word({
            id: new mongoose.Types.ObjectId(),
            name: word,
        });

        wordToStore.save()
            .then(data => {
                res.status(200).json({
                    name: data.name,
                    id: data.id,
                });
            }).catch(err => {
                res.status(500).json({
                    msg: err.message,
                });
            });
    });
};

function removeWord(req, res) {
    const { id } = req.params;

    Word.deleteOne({ _id: id })
        .then(function() {
            res.status(200).json({
                msg: `Url with id: ${id} successfully removed!`,
            });
        })
        .catch(function() {
            res.status(404).json({
                msg: `Not found word with id: ${id}!`,
            });
        });
};

module.exports = {
    getAll,
    addWord,
    removeWord,
};