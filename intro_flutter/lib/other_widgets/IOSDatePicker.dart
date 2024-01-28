import 'package:flutter/cupertino.dart';

class DatePickerApp extends StatelessWidget {
  const DatePickerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const CupertinoApp(
      theme: CupertinoThemeData(brightness: Brightness.dark),
      home: DatePickerExample(),
    );
  }
}

class DatePickerExample extends StatefulWidget {
  const DatePickerExample({super.key});

  @override
  State<DatePickerExample> createState() => _DatePickerExampleState();
}

class _DatePickerExampleState extends State<DatePickerExample> {
  DateTime date = DateTime(2023, 01, 26);
  DateTime time = DateTime(2023, 01, 26, 01, 04);
  DateTime dateTime = DateTime(2023, 01, 26, 01, 04, 10);

  void _showDialog(Widget child) {
    showCupertinoModalPopup<void>(
      context: context,
      builder: (BuildContext context) => Container(
        height: 300,
        padding: const EdgeInsets.only(top: 6.0),
        margin:
            EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
        color: CupertinoColors.systemBackground.resolveFrom(context),
        child: SafeArea(
          top: false,
          child: child,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: const CupertinoNavigationBar(
        middle: Text('CupertinoDatePicker Sample'),
      ),
      child: DefaultTextStyle(
        style: TextStyle(
            color: CupertinoColors.label.resolveFrom(context), fontSize: 22.0),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Text("Date"),
              CupertinoButton(
                onPressed: () => _showDialog(
                  CupertinoDatePicker(
                    initialDateTime: date,
                    mode: CupertinoDatePickerMode.date,
                    use24hFormat: true,
                    showDayOfWeek: true,
                    onDateTimeChanged: (DateTime newDate) {
                      setState(() => date = newDate);
                    },
                  ),
                ),
                child: Text('${date.month}-${date.day}-${date.year}',
                    style: const TextStyle(fontSize: 22.0)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
