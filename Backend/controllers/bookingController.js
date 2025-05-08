const Booking = require('../models/Booking');

exports.bookActivity = async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.user,
      activity: req.params.activityId
    });
    res.status(201).json({ message: 'Booked successfully', booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user }).populate('activity');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
