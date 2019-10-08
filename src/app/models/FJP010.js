/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FJP010', {
    FJP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJP_IDPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    FJP_CONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FJP_DTIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJP_DTPARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJP_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FJP_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJP_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FJP_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    FJP_IDARQU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
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
    tableName: 'FJP010'
  });
};
