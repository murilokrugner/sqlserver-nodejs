/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUH010', {
    QUH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUH_NUMAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUH_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUH_DESTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QUH_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QUH_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUH_CODAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QUH_NRVIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QUH_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QUH_CONFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QUH_EFETIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QUH_DTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUH_HRIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QUH_DTFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUH_HRFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    }
  }, {
    tableName: 'QUH010'
  });
};
