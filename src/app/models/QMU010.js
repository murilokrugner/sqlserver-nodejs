/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QMU010', {
    QMU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMU_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMU_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMU_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QMU_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QMU_REFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QMU_TOLER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QMU_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMU_CICLOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QMU_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMU_TPMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QMU_ERRMAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QMU_ERRMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QMU_VARTOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'QMU010'
  });
};
