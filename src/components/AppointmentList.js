import React from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment'

const AppointmentList = ({appointments, deleteAppointment}) => {
  const message = Object.keys(appointments).length === 0 ? "There aren't appointments" : "Admin Appointments"
  return(
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{message}</h2>
          <div className="appointment-list">
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
      </div>
    </div>
  )
};

AppointmentList.propTypes = {
  appointments: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default AppointmentList;
