/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TQ2010', {
    TQ2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQ2_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TQ2_DATATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQ2_HORATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TQ2_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQ2_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQ2_POSCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQ2_POSCO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQ2_MOTTRA: {
      type: "IMAGE",
      allowNull: true
    },
    TQ2_CENTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQ2_CTRAOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQ2_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TQ2_CCORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    TQ2_NUMME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQ2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQ2_EMPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQ2_EMPDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQ2_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQ2_CAUSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQ2_EMAIL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    TQ2_EMAIL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    TQ2_NOTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TQ2_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TQ2_USERIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TQ2_USERAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TQ2_USERCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TQ2_DATAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQ2_HORAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TQ2_DATAAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQ2_HORAAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TQ2_DATACO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQ2_HORACO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    }
  }, {
    tableName: 'TQ2010'
  });
};
