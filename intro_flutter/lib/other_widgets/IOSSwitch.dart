import 'package:flutter/cupertino.dart';

class CupertinoSwitchExample extends StatefulWidget {
  const CupertinoSwitchExample({super.key});

  @override
  State<CupertinoSwitchExample> createState() => _CupertinoSwitchExampleState();
}

class _CupertinoSwitchExampleState extends State<CupertinoSwitchExample> {
  bool switchValue = true;

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar:
          const CupertinoNavigationBar(middle: Text('CupertinoSwitch Sample')),
      child: Center(
        child: CupertinoSwitch(
          value: switchValue,
          activeColor: CupertinoColors.activeBlue,
          onChanged: (bool? value) {
            print('ola flutter $value');
            setState(() {
              switchValue = value ?? false;
            });
          },
        ),
      ),
    );
  }
}
