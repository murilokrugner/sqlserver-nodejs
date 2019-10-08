/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CB5010', {
    CB5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB5_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB5_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CB5_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CB5_PORTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB5_SETSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CB5_LPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB5_SERVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CB5_PORTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CB5_ENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CB5_VERSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB5_BUFFER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB5_FILA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB5_DRVWIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB5_PATH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    tableName: 'CB5010'
  });
};
