/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMV010', {
    TMV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMV_PCMSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMV_CONVOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TMV_DTINPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_DTFIPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMV_DTINRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_DTFIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_EXAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMV_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMV_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMV_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TMV_QTATEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMV_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TMV_TNOTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TMV_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TMV_TIPODT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMV_DTEXC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_DTEXC2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_DTEXC3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_DTEXC4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_DTEXC5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_DTEXC6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMV_FILDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMV_FILATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMV_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    }
  }, {
    tableName: 'TMV010'
  });
};
