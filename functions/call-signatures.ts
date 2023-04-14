enum userType {
    DOCTOR = 'DOCTOR',
    RECEPCTIONIST = 'RECEPCTIONIST',
    FINANCE = 'FINANCE'
}

enum attendanceType {
    ATTENDANCE = 'ATTENDANCE',
    DUTY = 'DUTY',
    SESSION = 'SESSION'
}

type user = {
    id: number;
    name: string;
    email?: string;
    specialty: string;
    type?: userType
}

type attendance = {
    patientId: number;
    eventId: number;
    placeId: number;
    type: attendanceType;
    user: user
}

function successMessage(attendance: attendance): string {
    return `${attendance.user.name} - ${attendance.eventId} - ${attendance.patientId}`
};

console.log(successMessage({
    patientId: 1,
    eventId: 1,
    placeId: 1,
    type: attendanceType.ATTENDANCE,
    user: {
        id: 1,
        name: 'name',
        specialty: 'specialty'
    },
}));

type form = {
    name: string;
    age: number;
    email: string;
}

type componentProps = {
    id: number;
    onSubmit: (values: form) => void
};

app({
    id: 1,
    onSubmit: values => {
        console.log(values)
    }
})

function app(props: componentProps) {
    props.onSubmit({
        name: 'ola',
        age: 22,
        email: '1'
    })
}