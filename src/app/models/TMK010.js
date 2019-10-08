/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMK010', {
    TMK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMK_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMK_NOMUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TMK_ENTCLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMK_NUMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMK_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMK_DTTERM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMK_REGMTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMK_SESMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMK_INDFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMK_ENDUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TMK_TELUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TMK_NIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    TMK_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMK_MONBIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMK_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    TMK_CIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    TMK_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TMK_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMK_RESAMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMK_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TMK_ESOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    TMK_QTDHRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    }
  }, {
    tableName: 'TMK010'
  });
};
