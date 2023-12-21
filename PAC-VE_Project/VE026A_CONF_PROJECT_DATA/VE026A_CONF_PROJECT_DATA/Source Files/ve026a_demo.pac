'!TITLE "SAMPLE PROGRAM"
'This program is sample program for checking academic robot.
'
PROGRAM VE026A_DEMO

	TAKEARM
	
	Move P, @0 P1					'Move to Initial Position(PTP motion)
	
	SPEED 100
	FOR I1 = 1 TO 2					'Scanning Cabinet Number
		Move P, @0 P2				'Move First Book Position
		SPEED 90
		Move P, @0 P3				'Move Last Book Position
		Move P, @0 P4				'Move Last Book Position
		Move P, @0 P5				'Move Last Book Position
		
	NEXT

'==================================

'===========Pick Book==============
	SPEED 100
	Approach P, P6, @0 50		'Approach to Book Position
	DRIVEA(7, F2)				'Open Grip
	Move L, @0 P6, S = 30		'Move to Book Position
	DRIVEA(7, F1)				'Close Grip
	DEPART L, @P 50				'Pull Book Out
	Move P, @0 P1				'Move to Initial Position
'===========Put Book in Cabinet==============
	Approach P, P7, @0 50		'Approach Cabinet Position
	Move L, @0 P7, S = 30		'Move to P5 by PTP motion
	DRIVEA(7, F2)					'Finger open
	DEPART L, @P 50				'Move to depart position of P5 by PTP motion
	Move P, @0 P1				'Move to Initial Position
'===========Pick Book==============
	SPEED 80
	Approach P, P6, @0 50		'Approach to Book Position
	DRIVEA(7, F2)				'Open Grip
	Move L, @0 P6, S = 30		'Move to Book Position
	DRIVEA(7, F1)				'Close Grip
	DEPART L, @P 50				'Pull Book Out
	Move P, @0 P1				'Move to Initial Position
'===========Put Book in Cabinet==============
	Approach P, P8, @0 50		'Approach Cabinet Position
	Move L, @0 P8, S = 30		'Move to P5 by PTP motion
	DRIVEA(7, F2)					'Finger open
	DEPART L, @P 50				'Move to depart position of P5 by PTP motion
	Move P, @0 P1				'Move to Initial Position

'==================================

	Move P, @0 P1				'Move to Initial Position

	GIVEARM

END
