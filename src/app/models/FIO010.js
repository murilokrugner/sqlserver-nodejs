/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIO010', {
    FIO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIO_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FIO_DTAVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIO_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIO_VLRDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIO_VLRATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIO_VENDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIO_VENATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIO_NATDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIO_NATATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIO_PORDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIO_PORATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIO_CLIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIO_LOJDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIO_CLIATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIO_LOJATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIO_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIO_EMSDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIO_EMSATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'FIO010'
  });
};
