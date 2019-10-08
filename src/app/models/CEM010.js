/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CEM010', {
    CEM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CEM_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    CEM_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CEM_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CEM_PESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CEM_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CEM_NOMEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                '
    },
    CEM_IDQUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    CEM_REMTRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CEM_LUCDIV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CEM_JURCAP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CEM_DEMREN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CEM_IRRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CEM_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CEM010'
  });
};
